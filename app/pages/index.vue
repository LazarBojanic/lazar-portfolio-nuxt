<script setup lang="ts">
const {data: projects} = await useAsyncData('projects', () => {
	return queryCollection('projects').all()
})

useSeoMeta({
	title: 'Lazar Bojanic - Projects',
	description: 'Portfolio projects by Lazar Bojanic',
	ogTitle: 'Lazar Bojanic - Projects',
	ogDescription: 'Portfolio projects by Lazar Bojanic'
})
</script>

<template>
	<UPage>
		<UPageHero
			title="Projects"
			description="A collection of my work and projects."
			:ui="{
        title: '!mx-0 text-left',
        description: '!mx-0 text-left'
      }"
		/>

		<UPageSection
			:ui="{
        container: '!pt-0'
      }"
		>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<Motion
					v-for="(project, index) in projects"
					:key="project.title"
					:initial="{ opacity: 0, transform: 'translateY(10px)' }"
					:while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
					:transition="{ delay: 0.1 * index }"
					:in-view-options="{ once: true }"
					class="h-full"
				>
					<UCard class="h-full flex flex-col">
						<img
							:src="project.image"
							:alt="project.title"
							class="w-full h-48 object-cover rounded-lg mb-4"
						/>

						<div class="flex-grow">
							<h3 class="text-lg font-semibold mb-2">
								{{ project.title }}
							</h3>

							<p class="text-sm text-muted mb-3">
								{{ project.description }}
							</p>

							<div class="flex flex-wrap gap-2 mb-4">
								<UBadge
									v-for="tag in project.tags"
									:key="tag"
									size="xs"
									variant="subtle"
								>
									{{ tag }}
								</UBadge>
							</div>
						</div>

						<template #footer>
							<div class="flex justify-end">
								<UButton
									v-if="project.url && project.url !== '#'"
									:to="project.url"
									target="_blank"
									size="sm"
									variant="outline"
									label="View on GitHub"
									icon="i-simple-icons-github"
								/>
								<UButton
									v-else
									disabled
									size="sm"
									variant="outline"
									label="Private Repository"
									icon="i-lucide-lock"
								/>
							</div>
						</template>
					</UCard>
				</Motion>
			</div>
		</UPageSection>
	</UPage>
</template>
