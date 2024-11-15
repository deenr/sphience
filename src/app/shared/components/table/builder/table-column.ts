import { TableDataType } from '../table-data-type.enum';
import { BadgeProperty } from './badge-builder';
import { FilterProperty } from './filter-builder';

export class TableColumn {
  constructor(
    public field: string,
    public name: string,
    public type: TableDataType,
    public sort: boolean,
    public avatarNameKey?: string | string[],
    public avatarEmailKey?: string,
    public sortField?: string,
    public sortFields?: string[],
    public badgeProperties?: BadgeProperty,
    public onDelete?: (id: string) => void,
    public onApprove?: { valueKey: string; value: any; action: (id: string) => void },
    public onDeny?: { valueKey: string; value: any; action: (id: string) => void },
    public editRoute?: string,
    public filterProperties?: FilterProperty,
    public translationKey?: string,
    public titleKey?: string,
    public descriptionKey?: string
  ) {}
}
