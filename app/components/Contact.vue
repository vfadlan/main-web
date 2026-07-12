<template>
  <div class="w-full max-w-7xl mx-auto p-8 rounded-2xl">
    <div class="mb-6 space-y-2">
      <h2 class="text-3xl mb-4" id="kontak">Hubungi Saya</h2>
      <p class="text-xl">
        Punya pertanyaan atau ingin berdiskusi? Kirim pesan langsung ke email saya melalui formulir berikut.
      </p>
    </div>

    <!-- Nuxt UI Form wrapper -->
    <UForm
        :state="state"
        class="space-y-4 max-w-3xl mx-auto"
        @submit="onSubmit"
    >
      <label for="nama" class="input-group">
        <span>Nama<span class="text-red-800">*</span></span>
        <input
            type="text" id="nama" name="nama"
            placeholder="Nama Lengkap"
            class="input-field"
            v-model="state.name"
        />
      </label>

      <label for="email" class="input-group">
        <span>Email<span class="text-red-800">*</span></span>
        <input
            type="email" id="email" name="email"
            placeholder="email@example.com"
            class="input-field"
            v-model="state.email"
        />
      </label>

      <label for="pesan" class="input-group">
        <span>Pesan<span class="text-red-800">*</span></span>
        <textarea
            name="pesan" id="pesan" cols="30" rows="10"
            class="input-field"
            v-model="state.message"
            placeholder="Tulis pesan Anda di sini..."
        ></textarea>
      </label>

      <div class="my-4 flex justify-start">
        <NuxtTurnstile
            ref="turnstileRef"
            v-model="turnstileToken"
        />
      </div>

      <!-- Status Alerts inside the form footprint -->
      <Transition name="fade">
        <div v-if="submissionStatus" class="text-sm font-mono mt-2">
          <p v-if="submissionStatus === 'success'" class="text-emerald-400">
            ✓ Pesan berhasil dikirim! Terima kasih.
          </p>
          <p v-else-if="submissionStatus === 'error'" class="text-rose-400">
            ✗ Gagal mengirim pesan. Silakan coba lagi.
          </p>
        </div>
      </Transition>

      <!-- Submit Trigger Element -->
      <div class="pt-2 flex justify-end">
        <UButton
            type="submit"
            label="Kirim Pesan"
            icon="i-lucide-send"
            trailing
            size="xl"
            class="cursor-pointer bg-primary-500 hover:bg-primary-600 active:bg-primary-200 active:text-primary-500"
            :loading="isLoading"
        />
      </div>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const state = reactive({
  name: '',
  email: '',
  message: ''
})

const isLoading = ref(false)
const submissionStatus = ref<'success' | 'error' | null>(null)
const turnstileToken = ref('')
const turnstileRef = ref()

async function onSubmit() {
  if (!turnstileToken.value) {
    submissionStatus.value = 'error'
    return
  }
  isLoading.value = true
  submissionStatus.value = null

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: state.name,
        email: state.email,
        message: state.message,
        token: turnstileToken.value
      }
    })

    submissionStatus.value = 'success'

    state.name = ''
    state.email = ''
    state.message = ''

    turnstileToken.value = ''
    turnstileRef.value?.reset()
  } catch (error) {
    console.error('Contact form error:', error)
    submissionStatus.value = 'error'

    turnstileToken.value = ''
    turnstileRef.value?.reset()
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.input-group {
  margin: 24px auto;
  display: block;
}

.input-field {
  width: 100%;
  border: 1px #babaca solid;
  border-radius: 8px;
  padding: 4px 8px;
}

.input-field:focus {
  outline: 2px #7f1d1d solid;
}
</style>