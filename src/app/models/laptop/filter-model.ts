import {OperationValueModel} from './operation-value-model';

export class FilterModel{
  price?: OperationValueModel[] = [];
  brand?: OperationValueModel[] = [];
  processorType?: OperationValueModel;
  ramSize?: OperationValueModel[];
  hardDisk?: OperationValueModel[];
  laptopWeight?: OperationValueModel[];
  graphicsProcessor?: OperationValueModel[];
  screenSize?: OperationValueModel[];
  screenType?: OperationValueModel[];
  operatingSystem?: OperationValueModel[];
  available?: OperationValueModel[];
}
