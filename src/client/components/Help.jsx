import React from "react";
import Paragraph from "./ui/tag/paragraph";
import { MdOutlineClear } from "react-icons/md";

const Help = ({ setState }) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-modal2 z-[99999999] flex flex-col items-center justify-center">
      <div className="flex flex-col gap-y-6 md:gap-y-8 w-[98%] md:w-[60%] bg-white rounded-2xl h-[90%] md:h-[80%] overflow-y-auto py-4 px-4 md:pb-12 pt-4 relative">
        <div className="w-full flex justify-end items-center">
          <MdOutlineClear
            fontSize={28}
            color="#FF0000"
            onClick={() => setState(false)}
            cursor={"pointer"}
          />
        </div>
        <div className="px-[3%] border rounded-xl flex flex-col gap-y-4 py-4 ">
          <p className="text-lg md:text-[24px] font-semibold border-b pb-2">
            Перепрограммирование
          </p>
          <Paragraph>
            Этап 1 состоит в индивидуальном перепрограммировании системы
            управления двигателем транспортного средства, при котором настройка
            параметров двигателя (зажигание, впрыск и т. д.) производится
            настраиваемым образом на динамометре. Все значения параметров
            двигателя на этом этапе остаются в пределах стандартов безопасности,
            установленных производителем. Этап 1 полностью надежен и гарантирует
            больше удовольствия от вождения без беспокойств!
          </Paragraph>
        </div>

        <div className="px-[3%] border rounded-xl flex flex-col gap-y-4 py-4 ">
          <p className="text-lg md:text-[24px] font-semibold border-b pb-2">
            Перепрограммация и оптимизация впуска и выпуска
          </p>
          <Paragraph>
            Для тех, кто хочет немного больше, чем на первом этапе, у нас есть
            второй этап, который состоит в оптимизации ряда элементов вокруг
            двигателя для повышения его эффективности. В основном это касается
            впуска и выпуска. Многие системы впуска воздуха очень ограничительны
            из-за своей антирезонансной структуры, предназначенной для
            подавления шума впуска двигателя. Установка спортивного воздушного
            фильтра или индивидуального впускного коллектора позволяет больше
            воздуха поступать в двигатель, что приводит к увеличению мощности.
            Поскольку на втором этапе мы соответствуем стандартам безопасности
            производителя, иногда части должны быть усилены, например,
            сцепление. В каждом этапе указаны заменяемые части.
          </Paragraph>
        </div>

        <div className="px-[3%] border rounded-xl flex flex-col gap-y-4 py-4 ">
          <p className="text-lg md:text-[24px] font-semibold border-b pb-2">
            Новые запчасти для двигателя
          </p>
          <Paragraph>
            На третьем этапе мы идем еще дальше, заменяя внутренние или важные
            части двигателя или турбонагнетателя. Это может включать увеличение
            объема цилиндров, установку спортивных распределительных валов или
            установку более крупного турбонагнетателя. Иногда существует
            определенный риск для надежности, но не всегда. Производители часто
            создают один базовый двигатель, и, используя более крупные
            турбонагнетатели и форсунки, создают две более мощные версии.
            Следует отметить, что в некоторых случаях вы можете улучшить свой
            двигатель с помощью оригинальных деталей из более мощной версии, не
            оказывая влияния на надежность, так как производитель уже учел это.
          </Paragraph>
        </div>

        <div className="px-[3%] border rounded-xl flex flex-col gap-y-4 py-4 ">
          <p className="text-lg md:text-[24px] font-semibold border-b pb-2">
            Новые запчасти для двигателя
          </p>
          <Paragraph>
            На третьем этапе мы идем еще дальше, заменяя внутренние или важные
            части двигателя или турбонагнетателя. Это может включать увеличение
            объема цилиндров, установку спортивных распределительных валов или
            установку более крупного турбонагнетателя. Иногда существует
            определенный риск для надежности, но не всегда. Производители часто
            создают один базовый двигатель, и, используя более крупные
            турбонагнетатели и форсунки, создают две более мощные версии.
            Следует отметить, что в некоторых случаях вы можете улучшить свой
            двигатель с помощью оригинальных деталей из более мощной версии, не
            оказывая влияния на надежность, так как производитель уже учел это.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Help;
