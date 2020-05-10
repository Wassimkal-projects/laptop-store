import {Component, OnInit} from '@angular/core';
import {Laptop} from '../../../models/laptop/laptop';
import {LaptopService} from '../../../service/laptop.service';
import {OperationValueModel} from '../../../models/laptop/operation-value-model';
import {FilterValues} from '../../../models/laptop/filter-values';
import * as _ from 'lodash';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.scss']
})
export class LaptopListComponent implements OnInit {
  searchedLaptops: Laptop[] = [];
  filters: Map<string, OperationValueModel[]> = new Map();
  filterKeys = ['brand', 'processorType', 'ramSize', 'hardDisk', 'laptopWeight', 'graphicsProcessor', 'operatingSystem', 'screenSize', 'screenType', 'available'];
  filterValues = FilterValues;
  totalItems: number;
  currentPage: number;

  constructor(private laptopService: LaptopService) {
  }

  getSearchedLaptops(filters: any, page: number) {
    this.laptopService.getSearchedLaptops(filters, page - 1).subscribe((laptops: any) => {
      this.totalItems = laptops.headers.get('x-total-count');
      this.searchedLaptops = laptops.body;
      this.currentPage = page;
    });
  }

  ngOnInit(): void {
    this.currentPage = 1;
    this.getSearchedLaptops({}, 1);
  }

  filterWithParam(param: string, brand: string, isChecked: boolean, operation: string) {
    const operationValue: OperationValueModel = {
      operation,
      value: brand
    };
    if (isChecked) {
      if (!this.filters.get(param)) {
        this.filters.set(param, []);
      }
      this.filters.get(param).push(operationValue);
    } else {
      this.filters.get(param).splice(this.findIndex(param, operationValue), 1);
    }
    this.getSearchedLaptops(this.getJsonFilters(), 1);
  }

  loadPage(page: number) {
    this.getSearchedLaptops(this.getJsonFilters(), page);
  }

  getJsonFilters() {
    const jsonObject = {};
    this.filters.forEach((value, key) => {
      jsonObject[key] = value;
    });
    return jsonObject;
  }

  findIndex(param: string, operation: OperationValueModel) {
    return _.findIndex(this.filters.get(param), (c: OperationValueModel) => {
      return (c.operation === operation.operation) && (c.value === operation.value);
    });
  }

  filterWithPrice(price: string, event: any, operation: string) {
    this.filters.set('price', []);
    if (event.target.value) {
      const operationValue: OperationValueModel = {
        operation,
        value: event.target.value
      };
      this.filters.get('price').push(operationValue);
    }
    this.getSearchedLaptops(this.getJsonFilters(), 1);
  }
}

