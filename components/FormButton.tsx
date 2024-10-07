import { montsy} from "@/fonts/fonts"

export default function FormButton ({ButtonText=""}) {
    return (
        <button type="submit" className={`${montsy.className}flex justify-center self-center text-sm bg-green-900 duration-300 hover:bg-secondary-color my-6 py-2 px-3 rounded-sm outline outline-offset-2 outline-1 outline-btn-two-color text-white`}>
            {ButtonText}
        </button>
       
    )
}