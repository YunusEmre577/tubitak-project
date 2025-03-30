import React from 'react';
import Heading from '../../ui/Heading';
import { Icon } from '@iconify/react/dist/iconify.js';
import { PlusIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/Button';
import { Dialog, DialogBody, DialogFooter, DialogHeader, DialogMiddle, DialogTrigger } from '@/components/ui/Dialog';
import { DialogClose } from '@radix-ui/react-dialog';

const featuresData = [
    {
      icon: "solar:remote-controller-minimalistic-bold-duotone", // Güneş paneli ikonu
      title: "Yüksek Enerji Verimliliği",
      description: "Baraj üzerindeki güneş panelleri, suyun yansımasını kullanarak daha fazla enerji üretimi sağlar. Bu sayede enerji verimliliği artar.",
      description2: "Baraj üzerinde yerleştirilen güneş panelleri, su yüzeyinden yansıyan ışığı kullanarak daha fazla enerji üretme kapasitesine sahiptir. Bu sistem, geleneksel güneş enerjisi sistemlerinden çok daha yüksek verimlilik sunar, çünkü su yüzeyinin yansıması güneş ışığını maksimum düzeyde toplar. Bu özellik, enerji üretiminin daha verimli olmasını sağlar ve aynı zamanda çevre dostu bir çözüm sunar."
    },
    {
      icon: "solar:waterdrop-bold-duotone", // Su ikonu
      title: "Su ve Enerji Tasarrufu",
      description: "Baraj üzerine yerleştirilen güneş panelleri, su kaynaklarını korurken aynı zamanda temiz enerji üretir, böylece çevre dostu bir çözüm sunar.",
      description2: "Baraj üzerine yerleştirilen güneş panelleri, hem suyun korunmasına yardımcı olur hem de bu su kaynakları üzerinde enerji üretimi sağlar. Güneş panelleri, suyun yüzeyinden enerji üretirken, suyun buharlaşmasını azaltır ve böylece su seviyelerinin korunmasına yardımcı olur. Bu sayede, daha sürdürülebilir bir enerji üretimi sağlanır ve çevresel etki en aza indirilir."
    },
    {
      icon: "solar:monitor-bold-duotone", // İzleme ve analiz ikonu
      title: "Gerçek Zamanlı İzleme",
      description: "Güneş panellerinin verimliliği, baraj su seviyesi ve enerji üretimi sürekli izlenebilir. Bu sayede anlık durum takibi yapılabilir.",
      description2: "Gerçek zamanlı izleme sistemi, güneş panellerinin verimliliğini ve barajın su seviyesini sürekli olarak takip etmenizi sağlar. Bu sistem, enerji üretim verimliliği hakkında anlık bilgi sağlar ve potansiyel arızaları erkenden tespit etmenizi mümkün kılar. Ayrıca, baraj su seviyesinin değişimini izleyerek enerji üretimi ile su seviyesinin nasıl etkileşime girdiğini daha iyi anlayabilirsiniz. Bu veriler, sistemin daha verimli çalışmasını sağlamak ve bakım süreçlerini optimize etmek için kritik öneme sahiptir."
    },
    {
      icon: "solar:accessibility-bold-duotone", // Çevre dostu ikonu
      title: "Çevre Dostu Enerji Üretimi",
      description: "Baraj üzerinde güneş panelleri kullanarak fosil yakıtların kullanımını azaltabilir ve temiz enerji üretimi sağlarsınız.",
      description2: "Baraj üzerine yerleştirilen güneş panelleri, çevre dostu enerji üretiminin önemli bir örneğidir. Bu sistem, fosil yakıtların kullanımını azaltarak karbon ayak izini minimize eder. Güneş enerjisi, çevreye zarar vermeyen, yenilenebilir bir enerji kaynağıdır ve su kaynaklarını koruyarak temiz enerji üretimini destekler. Bu şekilde, doğal çevreyi koruyarak sürdürülebilir bir enerji üretim süreci sağlanır ve doğa üzerindeki olumsuz etkiler en aza indirilir."
    },
    {
      icon: "solar:cloud-bold-duotone", // Bulut teknolojisi ikonu
      title: "Bulut Tabanlı Yönetim",
      description: "Güneş paneli sistemleri, bulut tabanlı platformlar ile uzaktan yönetilebilir, böylece daha esnek ve verimli operasyonel yönetim sağlanır.",
      description2: "Güneş paneli sistemleri, bulut tabanlı yönetim sistemleri aracılığıyla uzaktan izlenebilir ve yönetilebilir. Bu platformlar, kullanıcıların güneş paneli verilerini analiz etmelerini, sistem performansını değerlendirmelerini ve sistem üzerinde değişiklikler yapmalarını sağlar. Ayrıca, herhangi bir arıza durumunda sistem otomatik olarak bildirim gönderebilir. Bulut tabanlı yönetim, operasyonel verimliliği artırırken, aynı zamanda bakım ve onarım süreçlerinin daha hızlı ve etkili bir şekilde gerçekleştirilmesine olanak tanır."
    }
  ];
  

// Features bileşeni
export default function Features() {
  return (
    <section className='flex flex-col responsive items-center gap-8'>
      <Heading size='4xl'>Özellikler</Heading>
      <div className='w-full flex flex-col'>
        <div className='grid gap-0 grid-cols-1 lg:grid-cols-3'>
          {featuresData.slice(0, 3).map((feature, index) => (
            <Dialog key={index}>
                <DialogTrigger asChild>
                <div className={`cursor-pointer border-accent border-b flex flex-col gap-3 items-center p-5 ${index !== 2 ? 'lg:border-r' : ''}`}>
              <header className='flex flex-col items-center gap-2'>
                <Icon className='text-3xl text-colored' icon={feature.icon} />
                <h3 className='font-semibold text-foreground'>{feature.title}</h3>
              </header>
              <footer>
                <p className='text-center text-muted text-[15px]'>{feature.description}</p>
                <div className='justify-end flex mt-6'>
          <Button color="secondary" isIconOnly>
            <PlusIcon />
          </Button>
        </div>
              </footer>
            </div>
                </DialogTrigger>
                <DialogBody>
                    <DialogHeader>
                        <div className='flex items-center gap-2'>
                        <span className='text-3xl text-colored'><Icon icon={feature.icon} /></span>
                        <h2 className='font-semibold'>{feature.title}</h2>
                        </div>
                    </DialogHeader>
                    <DialogMiddle>
                        <p className='text-muted text-[15px]'>{feature.description2}</p>
                    </DialogMiddle>
                    <DialogFooter>
                        <DialogClose asChild>
                        <Button className='w-full lg:w-fit' icon={"solar:alt-arrow-right-outline"}>Çıkış</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogBody>
            </Dialog>
          ))}
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {featuresData.slice(3).map((feature, index) => (
            <Dialog key={index}>
                <DialogTrigger asChild>
                <div className={`cursor-pointer border-accent border-b lg:border-b-0 flex flex-col gap-3 items-center p-5 ${index % 2 == 0 ? 'lg:border-r' : 'border-b-0'}`}>
              <header className='flex flex-col items-center gap-2'>
                <Icon className='text-3xl text-colored' icon={feature.icon} />
                <h3 className='text-foreground font-semibold'>{feature.title}</h3>
              </header>
              <footer>
                <p className='text-center text-muted text-[15px]'>{feature.description}</p>
                <div className='justify-end flex mt-6'>
          <Button color="secondary" isIconOnly>
            <PlusIcon />
          </Button>
        </div>
              </footer>
            </div>
                </DialogTrigger>
                <DialogBody>
                    <DialogHeader>
                        <div className='flex items-center gap-2'>
                        <span className='text-3xl text-colored'><Icon icon={feature.icon} /></span>
                        <h2 className='font-semibold'>{feature.title}</h2>
                        </div>
                    </DialogHeader>
                    <DialogMiddle>
                        <p className='text-muted text-[15px]'>{feature.description2}</p>
                    </DialogMiddle>
                    <DialogFooter>
                        <DialogClose asChild>
                        <Button className='w-full lg:w-fit' icon={"solar:alt-arrow-right-outline"}>Çıkış</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogBody>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
