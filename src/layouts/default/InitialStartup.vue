<template>
  <v-main>
    <div v-if="!booted" id="initial_startup">
      <div class="graphic">
        <span>
          <svg width="250" height="52" xmlns="http://www.w3.org/2000/svg">
            <path
              class="resume-logo"
              d="M37.7 31.2c-.6-.4-3.8-2-4.4-2.1-.6-.2-1-.4-1.4.3l-2 2.5c-.4.4-.8.5-1.5.2-.6-.3-2.7-1-5.1-3.2-2-1.7-3.2-3.8-3.6-4.5-.4-.6 0-1 .3-1.3l1-1.1.6-1.1c.2-.4 0-.8 0-1.1l-2-4.8c-.6-1.3-1.1-1-1.5-1.1h-1.2c-.5 0-1.2.1-1.8.8-.5.6-2.2 2.2-2.2 5.3 0 3.2 2.3 6.3 2.6 6.7.3.4 4.6 7 11 9.7l3.7 1.4c1.5.5 3 .4 4 .2 1.3-.1 3.9-1.5 4.4-3 .5-1.5.5-2.8.4-3-.2-.4-.6-.5-1.3-.8M26 47.2c-3.9 0-7.6-1-11-3l-.7-.4-8.1 2L8.4 38l-.6-.8A21.4 21.4 0 0126 4.4a21.3 21.3 0 0121.4 21.4c0 11.8-9.6 21.4-21.4 21.4M44.2 7.6a25.8 25.8 0 00-40.6 31L0 52l13.7-3.6A25.8 25.8 0 0044.3 7.5"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      </div>
      <div class="progress">
        <v-progress-linear
          color="#0b846d"
          :value="progress"
        ></v-progress-linear>
      </div>
      <div class="main">WhatsApp</div>
      <div class="sec">
        <span>
          <svg width="10" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 1.6c1.4 0 2.5 1 2.6 2.4v1.5h.2c.5 0 1 .4 1 1V10c0 .6-.5 1-1 1H2.3a1 1 0 01-1.1-1V6.5c0-.6.5-1 1-1h.2V4.2c0-1.4 1-2.5 2.4-2.6H5zm0 1.2c-.7 0-1.3.6-1.3 1.3v1.4h2.6V4.2c0-.7-.4-1.2-1-1.3H5z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        &nbsp;End-to-end encrypted
      </div>
    </div>
  </v-main>
</template>

<script>
  import { sync, call } from 'vuex-pathify';

  export default {
    name: 'DefaultView',

    data() {
      return {
        progress: 0,
        visible: true,
      };
    },

    computed: {
      ...sync('head', ['name', 'booted']),
    },

    async mounted() {
      this.simulateProgress();
      this.booted = false;
    },

    methods: {
      ...call('head', ['sleep']),

      async simulateProgress() {
        //Progress 20%
        await this.sleep(200);
        this.progress = 20;

        //Progress 100%
        await this.sleep(1300);
        this.progress = 100;

        //Boot up
        await this.sleep(1700);
        this.booted = true;
      },
    },
  };
</script>
<style>
  #initial_startup {
    --startup-background: #111b21;
    --startup-background-rgb: 17, 27, 33;
    --startup-icon: #676f73;
    --primary-title: rgba(233, 237, 239, 0.88);
    --sec-lighter: #667781;
    --progress-primary: #0b846d;
    --progress-background: #233138;
  }

  #initial_startup {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    user-select: none;
    background-color: var(--startup-background);
  }

  #initial_startup .graphic {
    margin-top: -40px;
    color: var(--startup-icon);
  }

  #initial_startup .graphic .resume-logo {
    transform: translateX(calc(50% - 52px / 2));
  }

  #initial_startup .graphic::after {
    position: relative;
    top: -100%;
    left: calc(50% - 72px * 2 - 72px / 2);
    display: block;
    width: calc(72px * 3);
    height: 100%;
    content: '';

    background: linear-gradient(
      90deg,
      rgba(var(--startup-background-rgb), 0.5) 0,
      rgba(var(--startup-background-rgb), 0.5) 33.33%,
      rgba(var(--startup-background-rgb), 0) 44.1%,
      rgba(var(--startup-background-rgb), 0) 55.8%,
      rgba(var(--startup-background-rgb), 0.5) 66.66%,
      rgba(var(--startup-background-rgb), 0.5)
    );

    opacity: 1;
    animation: shimmer 1.5s linear 0.6s infinite;
  }

  @keyframes shimmer {
    from {
      left: calc(50% - 72px * 2 - 72px / 2);
    }

    to {
      left: calc(50% - 72px / 2);
    }
  }

  #initial_startup .progress {
    position: relative;
    width: 420px;
    height: 3px;
    margin-top: 40px;
  }

  #initial_startup .progress progress {
    vertical-align: top;
  }

  #initial_startup .main {
    margin-top: 40px;
    font-size: 17px;
    color: var(--primary-title);
  }

  #initial_startup .sec {
    margin-top: 12px;
    font-size: 14px;
    color: var(--sec-lighter);
  }

  #initial_startup .sec span {
    display: inline-block;
    margin-bottom: 2px;
    vertical-align: middle;
  }

  progress {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 3px;
    margin: 0;
    color: var(--progress-primary);
    background-color: var(--progress-background);
    border: none;
  }

  progress[value]::-webkit-progress-bar {
    background-color: var(--progress-background);
  }

  progress[value]::-moz-progress-bar,
  progress[value]::-webkit-progress-value {
    background-color: var(--progress-primary);
    transition: width 0.45s ease;
  }
</style>
