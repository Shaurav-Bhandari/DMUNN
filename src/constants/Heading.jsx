const Heading = ({ className, title }) => {
    return (
        <div
            className={`${className} max-w-[50rem] mx-auto mb-2 lg:mb-10 text-center`}
        >
            {title && <h2 className='h1'>{title}</h2>}
        </div>
    )
}

export default Heading
