
// 実績・スライダー(splide)
const achievementSlider = document.querySelector('#achievement-splide');

if (achievementSlider) {
  window.addEventListener('load', function () {
    new Splide("#achievement-splide", {
      type: 'loop',
      perPage: 1,
      perMove: 1,
      gap: 64,
      padding: "18%",
      focus: "center",
      start: 0,
      autoplay: false,
      arrows: true,
      pagination: true,
    }).mount();
  });
}

// インジケーターの表示
document.addEventListener('DOMContentLoaded', function() {
    const scrollContent = document.querySelector('.point-scroll-content');
    const scrollBar = document.querySelector('.point-scroll-bar');

    const minWidth = 78; // 最小パーセンテージ

    // 初期値セット（0%から伸びるのを防ぐ）
    scrollBar.style.width = minWidth + '%';

    scrollContent.addEventListener('scroll', function() {
        const scrollWidth = scrollContent.scrollWidth;
        const clientWidth = scrollContent.clientWidth;
        const scrollLeft = scrollContent.scrollLeft;

        const scrollPercent = scrollLeft / (scrollWidth - clientWidth);
        const barWidth = minWidth + (100 - minWidth) * scrollPercent;

        scrollBar.style.width = barWidth + '%';
    });
});

// 横スクロールガイドの表示
document.addEventListener('DOMContentLoaded', function() {
    const target = document.querySelector('.point-item-slide-img');
    const hint = document.querySelector('.slide-hint');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                hint.classList.add('show');

                // 数秒後に自動で非表示
                setTimeout(() => {
                    hint.classList.remove('show');
                }, 3000);

                // 一度表示したら監視解除
                observer.disconnect();
            }
        });
    }, {
        threshold: 0.5 // 画像が50%見えたら発火
    });

    observer.observe(target);
});

// お客様の声・スライダー(splide)
const voiceSlider = document.querySelector('#voice-splide');
if (voiceSlider) {
    new Splide("#voice-splide", {
      type: 'slide',
      perPage: 1,
      perMove: 1,
      focus: 'center',
      rewind: boolean = false,
      autoplay: false,
      arrows: true,
      pagination: true,
    }).mount();
};

// アコーディオンをクリックした時の動作
document.querySelectorAll('.faq-accordion-title-box').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling; // .faq-accordion-txt-box
    
    // 開閉処理
    if (content.classList.contains('open')) {
      content.classList.remove('open');
      button.classList.remove('close');
    } else {
      content.classList.add('open');
      button.classList.add('close');
    }
  });
});

// スックロール位置の監視
window.addEventListener('scroll', function() {
    const fvButton = document.getElementById('fv');
    const fixedButton = document.getElementById('fixed-cta-btn-content');
    const footer = document.querySelector('footer');
    
    // FVボタンの位置を取得
    const fvButtonRect = fvButton.getBoundingClientRect();
    // フッターの位置を取得
    const footerRect = footer.getBoundingClientRect();
    
    // FVボタンが画面から見えなく、かつフッターが画面下に入っていない場合に表示
    if (fvButtonRect.bottom < 0 && footerRect.top > window.innerHeight) {
        fixedButton.classList.add('show');
    } else {
        fixedButton.classList.remove('show');
    }
});