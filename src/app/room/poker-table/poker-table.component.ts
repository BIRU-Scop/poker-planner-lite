import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { PokerCardComponent } from '../poker-card/poker-card.component';
import { RoomStore, UserStore } from '@poker/data-models';

@Component({
  selector: 'app-poker-table',
  standalone: true,
  imports: [KeyValuePipe, PokerCardComponent],
  template: `
    <div class="flex gap-3 place-content-center">
      @for (item of roomStore.currentVotes() | keyvalue; track item.key) {
        @if (item.key !== userStore.user()?.name) {
          <div class="flex flex-col items-center gap-0.5">
            <app-poker-card
              [content]="item.value"
              size="S"
              [disabled]="true"
              [private]="roomStore.countdown() !== 0"
              [active]="item.value !== null"></app-poker-card>
            <span class="text-center">{{ item.key }}</span>
          </div>
        }
      }
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokerTableComponent {
  readonly roomStore = inject(RoomStore);
  readonly userStore = inject(UserStore);
}
