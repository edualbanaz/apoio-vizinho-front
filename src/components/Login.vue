<template>
  <section class="bg-gray-100 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-10 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-16">
          <a
            href="#"
            class="flex flex-col items-center mb-0 p-0 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img src="../../public/logo.png" width="200" height="200" />
          </a>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-normal text-av-secondary dark:text-white"
                >E-mail:</label
              >
              <input
                type="email"
                name="email"
                id="email"
                class="bg-white border h-14 border-av-secondary text-av-secondary sm:text-sm rounded-md focus:outline-none focus:ring-av-primary focus:border-av-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-normal text-av-secondary dark:text-white"
                >Senha:</label
              >
              <input
                type="password"
                name="password"
                id="password"
                class="bg-white border h-14 border-av-secondary text-av-secondary sm:text-sm rounded-md focus:outline-none focus:ring-av-primary focus:border-av-primary block w-full p-2.5 dark:bg-av-primary dark:border-av-primary dark:placeholder-av-primary dark:text-white dark:focus:ring-av-primary dark:focus:border-av-primary"
                required
              />
            </div>

            <button
              type="submit"
              class="w-full h-14 text-white uppercase bg-av-primary hover:bg-av-secondary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts"></script>

<style scoped></style>
