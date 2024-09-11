import '../CSS/Tooltip.css';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  return (
    <div className="custom-tooltip">
      {children}
      <span className="custom-tooltip-content">{content}</span>
    </div>
  );
};

export default Tooltip;
