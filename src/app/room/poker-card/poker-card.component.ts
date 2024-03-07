import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-poker-card',
  standalone: true,
  imports: [NgClass],
  template: `
    <button
      class="p-3 shadow group border-4 rounded-lg border-blue-400 bg-blue-100 hover:bg-blue-50 hover:border-blue-300"
      [ngClass]="
        size() === 'S' ? ['w-16', 'h-20', 'p-2'] : ['w-20', 'h-28', 'p-3']
      "
      [class.private]="private()"
      [class.active]="active()"
      [disabled]="disabled()">
      @if (private()) {
        <div
          class="h-full w-full bg-stripes"
          [ngClass]="
            active()
              ? ['bg-emerald-500', 'bg-stripes-emerald-300']
              : ['bg-gray-400', 'bg-stripes-gray-200']
          "></div>
      } @else {
        <div
          class="h-full w-full flex flex-col place-content-center rounded-md border"
          [ngClass]="
            active()
              ? [
                  'border-emerald-500',
                  'bg-slate-100',
                  'group-hover:bg-slate-50',
                  'group-hover:border-emerald-400'
                ]
              : [
                  'border-blue-400',
                  'bg-slate-100',
                  'group-hover:bg-slate-50',
                  'group-hover:border-blue-300'
                ]
          ">
          <span class="" [ngClass]="{ 'text-2xl': size() === 'L' }">
            {{ content() }}
          </span>
        </div>
      }
    </button>
  `,
  styles: `
    .private {
      @apply bg-gray-200 hover:bg-gray-200 border-gray-400;
    }
    .active {
      @apply bg-emerald-300 hover:bg-emerald-300 border-emerald-500;
    }
    .active:not(.private) {
      @apply hover:bg-emerald-200 hover:border-emerald-400;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokerCardComponent {
  content = input.required<string | null>();
  size = input<'S' | 'L'>('S');
  disabled = input<boolean>(false);
  private = input<boolean>(false);
  active = input<boolean>(false);
}
