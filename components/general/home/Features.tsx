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
    description: "Baraj üzerindeki güneş panelleri, suyun yansımasını kullanarak daha fazla enerji üretimi sağlar. Bu sayede enerji verimliliği artar."
  },
  {
    icon: "solar:waterdrop-bold-duotone", // Su ikonu
    title: "Su ve Enerji Tasarrufu",
    description: "Baraj üzerine yerleştirilen güneş panelleri, su kaynaklarını korurken aynı zamanda temiz enerji üretir, böylece çevre dostu bir çözüm sunar."
  },
  {
    icon: "solar:monitor-bold-duotone", // İzleme ve analiz ikonu
    title: "Gerçek Zamanlı İzleme",
    description: "Güneş panellerinin verimliliği, baraj su seviyesi ve enerji üretimi sürekli izlenebilir. Bu sayede anlık durum takibi yapılabilir."
  },
  {
    icon: "solar:accessibility-bold-duotone", // Çevre dostu ikonu
    title: "Çevre Dostu Enerji Üretimi",
    description: "Baraj üzerinde güneş panelleri kullanarak fosil yakıtların kullanımını azaltabilir ve temiz enerji üretimi sağlarsınız."
  },
  {
    icon: "solar:cloud-bold-duotone", // Bulut teknolojisi ikonu
    title: "Bulut Tabanlı Yönetim",
    description: "Güneş paneli sistemleri, bulut tabanlı platformlar ile uzaktan yönetilebilir, böylece daha esnek ve verimli operasyonel yönetim sağlanır."
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
          <Button isIconOnly>
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
                        <p className='text-muted text-[15px]'>{feature.description}</p>
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
          <Button isIconOnly>
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
                        <p className='text-muted text-[15px]'>{feature.description}</p>
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
