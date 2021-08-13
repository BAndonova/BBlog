import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from './shared/interfaces';
import { Itheme } from './shared/interfaces/theme';

import {environment} from '../environments/environment'
const API_URL = environment.apiURL

@Injectable()
export class ContentService {
  constructor(private http: HttpClient) {}

  loadThemes() {
    return this.http.get<Itheme[]>(`${API_URL}/themes`);
  }
  loadTheme(id: string) {
    return this.http.get<Itheme>(`${API_URL}/themes/${id}`);
  }

  loadRecentPosts(limit?: number) {
    const query = limit ? `?limit=${limit}` : ''
    return this.http.get<IPost[]>(`${API_URL}/posts${query}`);
  }

  loadPosts(limit?: number) {
    const query = limit ? `?limit=${limit}` : ''
    return this.http.get<IPost[]>(`${API_URL}/posts${query}`);
  }}
