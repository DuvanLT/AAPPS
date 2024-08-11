export default function Title({titulo}) {
    return(
        <div className=" max-w-[1020px] m-auto">
        <h1 className="uppercase text-3xl mt-10 font-spaceMono font-bold">{titulo}</h1>
        <div className="h-1 min-w-max bg-zinc-500 rounded-2xl my-2"></div>
        </div>
    )
}