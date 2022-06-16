interface IMessage {
  title: string;
}
const Message = ({ title }: IMessage) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

export const WelcomeMessage = () => 
    <Message title="Welcome Buddies!"/>

export default Message;
