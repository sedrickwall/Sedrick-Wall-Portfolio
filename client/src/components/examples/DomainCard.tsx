import DomainCard from '../DomainCard';
import { Briefcase } from 'lucide-react';
import productImage from '@assets/generated_images/Product_Leadership_domain_card_b9ef109a.png';

export default function DomainCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <DomainCard
        title="Product Leadership"
        description="Leading cross-functional teams to deliver innovative products that solve real problems and drive business growth."
        icon={Briefcase}
        image={productImage}
      />
    </div>
  );
}
