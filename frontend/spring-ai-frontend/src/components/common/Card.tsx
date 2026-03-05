type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
      {children}
    </div>
  );
}

export default Card;
