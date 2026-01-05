function ItemBox(props) {
  return (
    <div className="item-box">
      <div className="item-box-image">
        <img
          src={props.image}
          alt={props.title}
          title={props.title}
          loading="eager"
          width={286.5}
          height={200}
        />
      </div>
      <div className="item-box-overlay" />
      <div className="item-box-caption">
        <span className="title">{props.title}</span>
        <span className="desc">{props.desc}</span>
      </div>
    </div>
  );
}
export default ItemBox;
