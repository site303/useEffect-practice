import React from 'react';

function CalmCards() {
  const cards = [
    { title: 'Lorem ipsum dolor sit.', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio.' },
    { title: 'Lorem ipsum dolor sit.', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio.' },
    { title: 'Lorem ipsum dolor sit.', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio.' },
    { title: 'Lorem ipsum dolor sit.', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio.' },
    { title: 'Lorem ipsum dolor sit.', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio.' },
    { title: 'Lorem ipsum dolor sit.', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio.' },
    { title: 'Lorem ipsum dolor sit.', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio.' },
    { title: 'Lorem ipsum dolor sit.', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio.' },
    { title: 'Lorem ipsum dolor sit.', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio.' },
  ];

  return (
    <section className="calm-cards">
      <div className="container">
        <div className="calm-cards__inner">
          <div className="calm_cards-items">
            {cards.map((card, index) => (
              <div className="calm_cards-item" key={index}>
                <h4 className="calm_cards-item_title title">{card.title}</h4>
                <p className="calm_cards-item_text text">{card.text}</p>
                <button className="calm_cards-item_btn btn">Ok</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalmCards;
