
import "./rightWidget.css";

const RightWidget = () => {
  const rooms = ['General room', 'BePleasuredByPinky']
  return (
    <div>
      <div>Available Rooms</div>
        <div>
          {rooms.map(room => (
            <div>
              <div className='room'>{room}</div>
              </div>
          ))}
        </div>

    </div>
  )
}

export default RightWidget