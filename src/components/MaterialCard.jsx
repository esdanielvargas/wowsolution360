export default function MaterialCard({ image, title, caption }) {
  return (
    <div className="item-box">
      <div className="item-box-image">
        <img
          src={image}
          alt={title}
          title={title}
          loading="eager"
          width={286.5}
          height={200}
        />
      </div>
      <div className="item-box-overlay" />
      <div className="item-box-caption">
        <span className="title">{title}</span>
        <span className="desc">{caption}</span>
      </div>
    </div>
  );
}
