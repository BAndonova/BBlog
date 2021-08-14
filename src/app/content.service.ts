import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from './shared/interfaces';
import { Itheme } from './shared/interfaces/theme';

import {environment} from '../environments/environment'
import { ThemesComponent } from './details/themes/themes.component';
const API_URL = environment.apiURL

@Injectable()
export class ContentService {
  constructor(private http: HttpClient) {}

  loadThemes() {
    return this.http.get<Itheme[]>(`${API_URL}/themes`, { withCredentials: true });
  }
  loadTheme(id: string) {
    return this.http.get<Itheme>(`${API_URL}/themes/${id}`, { withCredentials: true });
  }

  loadRecentPosts(limit?: number) {
    const query = limit ? `?limit=${limit}` : ''
    return this.http.get<IPost[]>(`${API_URL}/posts${query}`, { withCredentials: true });
  }

  loadPosts(limit?: number) {
    const query = limit ? `?limit=${limit}` : ''
    return this.http.get<IPost[]>(`${API_URL}/posts${query}`, { withCredentials: true });
  }

  saveTheme(data: any) {
    return this.http.post<Itheme>(`${API_URL}/themes`, data, { withCredentials: true });
  }

  savePost(data: any) {
    return this.http.post<IPost>(`${API_URL}/posts`, data, { withCredentials: true });
  }
}
  // loadPosts() {
  //   return this.http.get<IPost[]>(`${API_URL}/posts`);
  // }}
