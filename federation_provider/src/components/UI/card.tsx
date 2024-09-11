import '../CSS/card.css';

interface CardProps {
  children: React.ReactNode;
  title: string;
}

const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div className="custom-card">
      <h2 className="custom-card-title">{title}</h2>
      <div className="custom-card-content">{children}</div>
    </div>
  );
};

export default Card;
