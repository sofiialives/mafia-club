
import cn from '@/utils/cn';
import Style from './spinner.module.css'

interface Loading {}

export default function Loading({}: Loading) {
  return (
    <div className="flex justify-center items-center h-screen">
          <span className={cn(Style.loader)}></span>
    </div>
  );
}
