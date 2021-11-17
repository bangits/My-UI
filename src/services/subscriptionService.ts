export class SubscriptionService<Props> {
  private subscribers: Set<(props: Props) => void> = new Set();

  protected publish(props: Props): void {
    this.subscribers.forEach((cb) => cb(props));
  }

  public subscribe(cb: (props: Props) => void): () => void {
    this.subscribers.add(cb);
    return () => {
      this.subscribers.delete(cb);
    };
  }
}
