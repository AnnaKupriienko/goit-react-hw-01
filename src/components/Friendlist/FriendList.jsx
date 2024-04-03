import FriendListItem from "../FriendListItem/FriendListItem"

export default function FriendList({friends}) {
    return (
        <ul>
            {friends.map((element) => (
               <li key={element.id}>
                    <FriendListItem friend={element}/>
            </li>  
            ))}
        </ul>
    );
}