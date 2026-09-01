export default function Users({ users }) {
    return (
        <div className="users-list">
            {users.map(user => (
                <div className="user-card" key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}