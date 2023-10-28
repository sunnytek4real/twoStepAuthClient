const MessagePage = () => {
  return (
    <>
      <div className="text-center flex justify-center flex-col phone:flex h-full fixed">
        <div className="text-[50px] phone:text-[35px]">A Mail has been sent to your account</div>
        <p>This is a two step authentication system built with:</p>
        <ul>
          <li> React Template Typescript</li>
          <li> Node</li>
          <li> Express</li>
          <li>Mongoose ORM</li>
          <li> Mongo Database</li>.
        </ul>
      </div>
    </>
  );
};

export default MessagePage;
