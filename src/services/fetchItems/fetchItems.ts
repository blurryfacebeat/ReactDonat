import { BaseHttpClient } from '@/modules/HttpClient/BaseHttpClient';
import { IFetchPizzaItem } from '@/services/fetchItems/fetchItems.types';

export const fetchItems = async (): Promise<Array<IFetchPizzaItem>> => BaseHttpClient.get('/items');
