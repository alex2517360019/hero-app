const GifGridItem = ({ id, url, title }) => {
  return (
      <div className="card">
        <h3>{title}</h3>
          <img src={url} alt={title} />
      </div>
  );
};

export default GifGridItem;
