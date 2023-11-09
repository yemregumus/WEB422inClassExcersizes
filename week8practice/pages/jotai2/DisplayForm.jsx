import { useAtom } from "jotai";
import { nameAtom, ageAtom, addressAtom, phoneAtom, gradesAtom } from "./atoms";

export default function DisplayForm() {
  const [name, setName] = useAtom(nameAtom),
    [age, setAge] = useAtom(ageAtom),
    [address, setAddress] = useAtom(addressAtom),
    [phone, setPhone] = useAtom(phoneAtom),
    [grades, setGrades] = useAtom(gradesAtom);

  return (
    <>
      <h1> Welcome to my practice of usage of atoms</h1>
      <ul className="unorderedlist">
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Address: {address}</li>
        <li>Phone: {phone}</li>
        <li>Grades: {grades}</li>
      </ul>
    </>
  );
}
