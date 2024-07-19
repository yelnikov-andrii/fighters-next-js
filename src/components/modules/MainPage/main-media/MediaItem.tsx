import Image from "next/image";

function MediaItem(props: { img: { src: string, alt: string }, h4: string, p: string }) {
    const { img, h4, p } = props;
    return (
        <div className="bg-gray-light w-full md:w-[45%]">
            <Image
                width={600}
                height={700}
                src={img.src}
                alt={img.alt}
                className="img-full max-h-[710px] object-cover"
            />
            <div className="p-8">
                <h4 className="font-bold text-lg font-osvald mb-4">
                    {h4}
                </h4>
                <p>
                    {p}
                </p>
            </div>
        </div>
    );
}

export default MediaItem;