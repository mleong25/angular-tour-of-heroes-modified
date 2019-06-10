import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  static clear(): (...args: any[]) => void {
    throw new Error("Method not implemented.");
  }

  clear() {
    this.messages = [];
  }

  add(message: string) {
    this.messages.push(message);
  }

  messages: string[] = [];
}