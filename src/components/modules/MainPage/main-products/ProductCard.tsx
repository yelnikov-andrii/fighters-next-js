import LinkButton from "@/components/elements/link-button/LinkButton";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

function ProductCard(props: { product: any }) {
    const { product } = props;
    const t = useTranslations('common');

    return (
        <div className="min-w-[324px] flex flex-col justify-between">
            <div className="w-[324px] h-[324px] relative">
                <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </div>
            <div className="pt-4">
                <h3 className="font-osvald font-bold text-2xl uppercase mb-4">
                    {product.name}
                </h3>
                {product?.description && (
                    <p className="mb-8">
                        {product.description}
                    </p>
                )}
                <LinkButton url={product.href} style={{ border: '1px solid black', borderRadius: '4px', minWidth: '130px', display: 'flex', justifyContent: 'center' }}>
                    {t("shop_now")}
                </LinkButton>
            </div>
        </div>
    );
}

export default ProductCard;