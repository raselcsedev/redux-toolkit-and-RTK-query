import {
    useGetUsersQuery,
    useGetUserQuery,
  } from "../redux/services/userService";
  
  export default function Users() {
      const { data, error, isLoading } = useGetUsersQuery();
    // const { data, error, isLoading } = useGetUserQuery(1);
    return (
      <div>
        {isLoading && <p>Loading ....</p>}
        {error && <p className="text-red-500">Something went wrong!</p>}
  
         <div className="mt-2 h-80 p-4">
          {data &&
            data.length > 0 &&
            data.map((item, index) => (
              <div
                className="flex justify-start-start items-center space-x-4 mb-4"
                key={index}
              >
                <img src={item.avatar_url} className="h-10 w-10 rounded-full" />
                <p>{item.login}</p>
              </div>
            ))}
        </div> 
  
        {/* Fetch Single user */}
        {/* {data && (
          <div className="flex justify-start-start items-center space-x-4 mb-4">
            <img src={data?.avatar_url} className="h-10 w-10 rounded-full" />
            <p>{data?.login}</p>
          </div>
        )} */}
      </div>
    );
  }