import "./ExploreContainer.css";

interface ContainerProps {
  initialContext: any;
}

const ExploreContainer: React.FC<ContainerProps> = ({ initialContext }) => {
  return (
    <div className="container">
      <img className="logo" src="/assets/logo.svg" />
      <h3>Welcome to Portals</h3>
      <p>
        This is a web application that has the Portals plugin preinstalled. If
        you would like to learn more about how to interact with this web
        application from the Native application you can find reference material
        below.
      </p>
      <ol className="info-list">
        <li>
          <p>Passing Data to a Portal with Initial Context</p>
          <a href="https://ionic.io/docs/portals/for-ios/how-to/using-the-portals-plugin#initial-context">
            iOS
          </a>
          <a href="https://ionic.io/docs/portals/for-android/how-to/using-the-portals-plugin#initial-context">
            Android
          </a>
        </li>
        <li>
          <p>Communicating with Pub/Sub</p>
          <a href="https://ionic.io/docs/portals/for-ios/how-to/using-the-portals-plugin#communicating-via-pubsub">
            iOS
          </a>
          <a href="https://ionic.io/docs/portals/for-android/how-to/using-the-portals-plugin#communicating-via-pubsub">
            Android
          </a>
        </li>
        <li>
          <p>Define your own API for communication</p>
          <a href="https://ionic.io/docs/portals/for-ios/how-to/define-api-in-typescript">
            iOS
          </a>
          <a href="https://ionic.io/docs/portals/for-android/how-to/define-api-in-typescript">
            Android
          </a>
        </li>
      </ol>
      <h3>Initial Context</h3>
      <p>
        This application was preseeded with an Initial Context. This data was
        initially provided by the Native application
      </p>
      <pre>{JSON.stringify(initialContext, null, 2)}</pre>
    </div>
  );
};

export default ExploreContainer;
