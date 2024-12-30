import Input from "../input/Input"
const Form = () => {
    return (
        <div className="flex flex-row flex-nowrap gap-4">
            <Input key="1" width={"full"} icon={"$"} iconPosition={"left"} ></Input>
            <Input key="2" width={"1/2"} icon={"year"} iconPosition={"right"} ></Input >
        </div>
    )
}
export default Form