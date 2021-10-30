import * as SecureStore from 'expo-secure-store';

export type AuthStorageType = {
  namespace: string;
  getToken: () => Promise<string | null>;
  setToken: (token: string) => Promise<void>;
  removeToken: () => Promise<void>;
};

class AuthStorage implements AuthStorageType {
  namespace: string;
  constructor(namespace = 'authToken') {
    this.namespace = namespace;
  }

  async getToken() {
    const token = await SecureStore.getItemAsync(this.namespace);

    return token;
  }

  async setToken(token: string) {
    await SecureStore.setItemAsync(this.namespace, token);
  }

  async removeToken() {
    await SecureStore.deleteItemAsync(this.namespace);
  }
}

export default AuthStorage;
