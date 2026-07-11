<template>
  <div class="w-full max-w-xl p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white shadow-2xl">
    <div class="mb-6 space-y-2">
      <h3 class="text-2xl font-normal tracking-wide">Hubungi Saya</h3>
      <p class="text-sm text-zinc-300">
        Punya pertanyaan atau ingin berdiskusi? Kirim pesan langsung ke email saya.
      </p>
    </div>

    <!-- Nuxt UI Form wrapper -->
    <UForm
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
    >
      <UFormField label="Nama Anda" name="name" eager-validation>
        <UInput
            v-model="state.name"
            placeholder="Nama Lengkap"
            size="md"
            class="w-full"
            :ui="{ base: 'bg-white/5 border-white/10 text-black placeholder-zinc-400 focus:border-primary-500' }"
        />
      </UFormField>

      <UFormField label="Email" name="email" required eager-validation>
        <UInput
            v-model="state.email"
            type="email"
            placeholder="nama@example.com"
            size="md"
            class="w-full"
            required
            :ui="{ base: 'bg-white/5 border-white/10 text-black placeholder-zinc-400 focus:border-primary-500' }"
        />
      </UFormField>

      <UFormField label="Pesan" name="message" required eager-validation>
        <UTextarea
            v-model="state.message"
            placeholder="Tulis pesan Anda di sini..."
            size="md"
            class="w-full"
            required
            :ui="{ base: 'bg-white/5 border-white/10 text-black placeholder-zinc-400 focus:border-primary-500' }"
        />
      </UFormField>

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
            size="md"
            color="primary"
            :loading="isLoading"
            class="cursor-pointer"
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

async function onSubmit() {
  isLoading.value = true
  submissionStatus.value = null

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: state.name,
        email: state.email,
        message: state.message
      }
    })

    submissionStatus.value = 'success'

    state.name = ''
    state.email = ''
    state.message = ''
  } catch (error) {
    console.error('Contact form error:', error)
    submissionStatus.value = 'error'
  } finally {
    isLoading.value = false
  }
}
</script>