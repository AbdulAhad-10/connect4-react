import '../Game.css';


export default function GameCircle({id, children, className, onCircleClicked }) {
    return (
        <div className={`gameCircle ${className}`} onClick={() => onCircleClicked(id)}>
            {children}
        </div>
    );
}