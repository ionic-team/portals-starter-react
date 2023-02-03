import "./ExploreContainer.css";

interface ContainerProps {
  initialContext: any;
}

const ExploreContainer: React.FC<ContainerProps> = ({ initialContext }) => {
  return (
    <div className="container">
      <h3>Initial Context:</h3>
      <pre>{JSON.stringify(initialContext)}</pre>
    </div>
  );
};

export default ExploreContainer;
