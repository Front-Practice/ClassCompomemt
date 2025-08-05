import React, { Component } from 'react';
import CardItem from '../../components/CardItem';
import Modal from '../../components/modal'; 

export default class CardsPage extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      searchTerm: '',
      isModalOpen: false,
      editingCard: null,
    };
  }

  componentDidMount() {
    const storedCards = localStorage.getItem('cards');
    if (storedCards) {
      this.setState({ cards: JSON.parse(storedCards) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cards !== this.state.cards) {
      localStorage.setItem('cards', JSON.stringify(this.state.cards));
    }
  }

  handleAddCard = () => {
    this.setState({
      isModalOpen: true,
      editingCard: {
        id: Date.now(),
        title: '',
        description: '',
        date: new Date().toISOString().substring(0, 10),
        priority: '',
        status: '',
      },
    });
  };

  handleDelete = (id) => {
    this.setState((prev) => ({
      cards: prev.cards.filter((card) => card.id !== id),
    }));
  };

  handleChange = (id, field, value) => {
    const { editingCard } = this.state;
    if (editingCard) {
      this.setState({
        editingCard: { ...editingCard, [field]: value },
      });
    }
  };

  handleEdit = (id) => {
    const cardToEdit = this.state.cards.find((card) => card.id === id);
    this.setState({
      isModalOpen: true,
      editingCard: { ...cardToEdit },
    });
  };

  handleSave = () => {
    const { cards, editingCard } = this.state;
    const existingCardIndex = cards.findIndex((card) => card.id === editingCard.id);

    if (existingCardIndex > -1) {
      const updatedCards = [...cards];
      updatedCards[existingCardIndex] = editingCard;
      this.setState({ cards: updatedCards });
    } else {
      this.setState((prev) => ({
        cards: [...prev.cards, editingCard],
      }));
    }

    this.setState({ isModalOpen: false, editingCard: null });
  };

  handleCancel = () => {
    this.setState({ isModalOpen: false, editingCard: null });
  };

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { cards, searchTerm, isModalOpen, editingCard } = this.state;
    const filteredCards = cards.filter(
      (card) =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={this.handleAddCard}
          >
            + Create
          </button>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={this.handleSearch}
            className="border p-2 rounded w-64"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCards.map((card) => (
            <CardItem
              key={card.id}
              card={card}
              onEdit={this.handleEdit}
              onDelete={this.handleDelete}
            />
          ))}
        </div>

        {isModalOpen && (
          <Modal onClose={this.handleCancel}>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
              <h2 className="text-2xl font-bold mb-4">
                {editingCard.id ? 'Edit Card' : 'Create Card'}
              </h2>
              <input
                type="text"
                placeholder="Title"
                value={editingCard.title}
                onChange={(e) =>
                  this.handleChange(editingCard.id, 'title', e.target.value)
                }
                className="border p-2 rounded w-full mb-4"
              />
              <textarea
                placeholder="Description"
                value={editingCard.description}
                onChange={(e) =>
                  this.handleChange(editingCard.id, 'description', e.target.value)
                }
                className="border p-2 rounded w-full mb-4"
                rows="4"
              ></textarea>
              <input
                type="date"
                value={editingCard.date}
                onChange={(e) =>
                  this.handleChange(editingCard.id, 'date', e.target.value)
                }
                className="border p-2 rounded w-full mb-4"
              />
              <input
                type="text"
                placeholder="Priority"
                value={editingCard.priority}
                onChange={(e) =>
                  this.handleChange(editingCard.id, 'priority', e.target.value)
                }
                className="border p-2 rounded w-full mb-4"
              />
              <input
                type="text"
                placeholder="Status"
                value={editingCard.status}
                onChange={(e) =>
                  this.handleChange(editingCard.id, 'status', e.target.value)
                }
                className="border p-2 rounded w-full mb-4"
              />
              <div className="flex justify-end gap-4">
                <button
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                  onClick={this.handleCancel}
                >
                  Cancel
                </button>
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded"
                  onClick={this.handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}