import LastMarqueeItem from "./LastMarqueeItem";

function LatestMarquee() {
    return (
        <div className='overflow-hidden marquee py-2 md:py-4 bg-green flex items-center'>
            <LastMarqueeItem />
            <LastMarqueeItem />
            <LastMarqueeItem />
            <LastMarqueeItem />
        </div>
    );
}

export default LatestMarquee;