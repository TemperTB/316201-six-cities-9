function LoadingScreen(): JSX.Element {

  return (
    <section className="loading" data-testid="loading-screen">
      <h1 className="visually-hidden">Error</h1>
      <div className="loading__status-wrapper">
        <b className="loading__status">Don&apos;t worry</b>
        <p className="loading__status-description">It&apos;s loading</p>
        <div className="lds-default">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default LoadingScreen;
