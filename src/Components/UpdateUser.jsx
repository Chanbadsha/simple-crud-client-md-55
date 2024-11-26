
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const user = useLoaderData()
    console.log(user);
    return (
        <div>
            <h2>Update your information</h2>
  {user.name}
        </div>
    );
};

export default UpdateUser;