<script setup>
import logo from '../assets/logo.png'

</script>

<template>
    <footer class="bg-[#0B261F] border-t border-gray-200 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Logo and Address Section -->
        <div class="flex flex-col items-center sm:items-start text-center sm:text-left md:text-center">
          <img :src="logo" alt="Company Logo" class="h-10 mb-4" />
          <p class="text-sm text-white text-left font-normal">
            17 Sapphire Street, Commerce Plaza, Suite 401,
            Metroville, New York.
          </p>
          <div class="flex space-x-4 mt-6 justify-center sm:justify-start">
            <a
              href="#"
              class="hover:text-gray-900 p-2 rounded-full border border-gray-200"
            >
                <img src="../assets/facebook.png" alt="facebook" class="h-5 w-5" />
              <!-- <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.482v-9.294H9.691v-3.622h3.116V8.413c0-3.1 1.893-4.788 4.655-4.788 1.324 0 2.464.099 2.794.144v3.24l-1.918.001c-1.503 0-1.794.715-1.794 1.76v2.308h3.589l-.467 3.622h-3.122V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z"
                />
              </svg> -->
            </a>
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 p-2 rounded-full border border-gray-200"
            >
                <img src="../assets/twitter.png" alt="twitter" class="h-5 w-5" />
              <!-- <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.611 1.798-1.574 2.165-2.724-.95.564-2.005.974-3.127 1.194-.897-.957-2.173-1.555-3.591-1.555-2.717 0-4.924 2.207-4.924 4.924 0 .386.043.762.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.423.726-.666 1.57-.666 2.475 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.229-.616v.062c0 2.388 1.699 4.381 3.946 4.833-.413.112-.848.171-1.296.171-.316 0-.624-.031-.927-.089.624 1.951 2.438 3.373 4.584 3.414-1.68 1.318-3.8 2.104-6.102 2.104-.396 0-.788-.023-1.174-.067 2.179 1.397 4.768 2.211 7.548 2.211 9.058 0 14.009-7.507 14.009-14.009 0-.213-.005-.426-.015-.637.961-.694 1.796-1.56 2.457-2.548l-.047-.02z"
                />
              </svg> -->
            </a>
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 p-2 rounded-full border border-gray-200"
            >
                <img src="../assets/instagram.png" alt="instagram" class="h-5 w-5" />
              <!-- <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.316 3.608 1.291.975.975 1.229 2.242 1.291 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.316 2.633-1.291 3.608-.975.975-2.242 1.229-3.608 1.291-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.316-3.608-1.291-.975-.975-1.229-2.242-1.291-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.316-2.633 1.291-3.608.975-.975 2.242-1.229 3.608-1.291 1.265-.058 1.645-.07 4.849-.07zm0-2.163C8.756 0 8.346.012 7.052.07 5.759.128 4.462.392 3.423 1.432c-1.039 1.039-1.303 2.336-1.361 3.629-.058 1.294-.07 1.704-.07 4.939s.012 3.645.07 4.939c.058 1.294.322 2.591 1.361 3.629 1.039 1.039 2.336 1.303 3.629 1.361 1.294.058 1.704.07 4.939.07s3.645-.012 4.939-.07c1.294-.058 2.591-.322 3.629-1.361 1.039-1.039 1.303-2.336 1.361-3.629.058-1.294.07-1.704.07-4.939s-.012-3.645-.07-4.939c-.058-1.294-.322-2.591-1.361-3.629-1.039-1.039-2.336-1.303-3.629-1.361-1.294-.058-1.704-.07-4.939-.07z"
                />
                <circle cx="12" cy="12" r="3.515" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg> -->
            </a>
          </div>
        </div>
  
        <!-- Company Links -->
        <div class="flex flex-col items-center sm:items-start text-center sm:text-left ">
          <h3 class="text-white text-base font-medium mb-4">Company</h3>
          <ul class="space-y-2 ">
            <li><a href="#" class="text-white text-sm font-normal hover:text-yellow-800">Partnerships</a></li>
            <li><a href="#" class="text-white text-sm font-normal hover:text-yellow-800">Terms of Use</a></li>
            <li><a href="#" class="text-white text-sm font-normal hover:text-yellow-800">Privacy Policy</a></li>
            <li><a href="#" class="text-white text-sm font-normal hover:text-yellow-800">Careers</a></li>
          </ul>
        </div>
  
        <!-- Resources Links -->
        <div class="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 class="text-white text-base font-medium mb-4">Resources</h3>
          <ul class="space-y-2 ">
            <li><a href="#" class="text-white text-sm font-normal hover:text-yellow-800">Blog</a></li>
            <li><a href="#" class="text-white text-sm font-normal hover:text-yellow-800">Events</a></li>
            <li><a href="#" class="text-white text-sm font-normal hover:text-yellow-800">Reports & Publications</a></li>
          </ul>
        </div>
  
        <!-- Contact Links -->
        <div class="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 class="text-white text-base font-medium mb-4">Contact</h3>
          <p class="text-white text-sm font-normal md:text-base">+234-0-0099098</p>
          <p class="text-white text-sm font-normal md:text-base">contact@whatnow.com</p>
        </div>
      </div>
  
      <!-- Copyright Section -->
      <div class="border-t border-green-200 mt-8 pt-4 text-center text-sm text-gray-500">
        © 2025 by --------
      </div>
    </footer>
  </template>
  