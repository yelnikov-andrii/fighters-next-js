import * as React from 'react';
import MediaItem from "./MediaItem";
import { useTranslations } from 'next-intl';

function MainMedia() {
    const t = useTranslations('common');

    return ( 
        <section>
            <div className="container flex gap-4 justify-between flex-col md:flex-row">
                <MediaItem 
                  img={{src: '/mainmedia-1.jpg', alt: 'Boxing'}}
                  h4={t("boxing_equipment_and_martial_arts")}
                  p={t("welcome_to")}
                />
                <MediaItem 
                  img={{src: '/mainmedia-2.jpg', alt: 'Bjj gi'}}
                  h4={t("bjj_and_mma")}
                  p={t("we_are_num_one")}
                />
            </div>
        </section>
     );
}

export default MainMedia;