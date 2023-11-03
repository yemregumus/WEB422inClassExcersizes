import { useAtom } from "jotai";
import { userNameAtom, ageAtom, emailAtom } from "./atoms";

export default function DisplayDetails() {
  const [userName, setUserName] = useAtom(userNameAtom),
    [age, setAge] = useAtom(ageAtom),
    [email, setEmail] = useAtom(emailAtom);
  return (
    <>
      <h1>Welcome to dashboard</h1>
      <ul className="unlist">
        <li>Age : {age}</li>
        <li>Email: {email}</li>
      </ul>
    </>
  );
}
