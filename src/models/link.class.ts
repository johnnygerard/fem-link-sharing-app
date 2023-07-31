import { Platform } from "./platform.pojo";

export class Link {
  url = '';
  platform = Platform.GITHUB;

  isUrlValid(): boolean {
    return this.url.startsWith(this.platform.prefix);
  }
}
